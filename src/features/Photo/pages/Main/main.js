import Banner from 'components/Banner/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList/PhotoList';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { removePhoto } from 'features/Photo/PhotoSlice';
import productApi from 'api/productApi';

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos); // get value from redux store
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();

  const handlePhotoEditClick = (photo) => {
    history.push(`/photos/${photo.id}`);
  };
  const handlePhotoRemoveClick = (photo) => {
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  console.log('Mainpage');
  const [productList, setProductList] = useState([]);

  var isTimelinePage = false;
  const fetchProductList = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10,
      };
      const response = await productApi.getAll(params);
      console.log(response);
      setProductList(response.data);
      isTimelinePage = !isTimelinePage;
      console.log(isTimelinePage);
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  };
  console.log(productList);
  return (
    <div className="photo-main">
      <Banner
        title="🎉 Your awesome photos 🎉"
        backgroundUrl={Images.color_BG}
      />

      <Container className="text-center">
        <div className="py-5">
          <Button onClick={fetchProductList}> Photo Timeline </Button>

          <Link to="/photos/add">Add new photo</Link>
        </div>

        {productList && (
          <PhotoList
            productList={productList}
            photoList={photos}
            onPhotoEditClick={handlePhotoEditClick}
            onPhotoRemoveClick={handlePhotoRemoveClick}
          />
        )}
      </Container>
    </div>
  );
}

export default MainPage;

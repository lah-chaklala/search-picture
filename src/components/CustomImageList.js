
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';

function CustomImageList({ images }) {  
  return (
    <div className={styles.icon}>
      <ImageList rowHeight={160} cols={2}>
        {images.map((item) => (
          <ImageListItem key={item.id} style={{ height: 'auto' }}>
            <img src={item.urls.small} alt={item.alt_description} />
            <ImageListItemBar
                title={item.alt_description}
                subtitle={<span>{item.description}</span>}
              />          
          </ImageListItem>
        ))}
      </ImageList>   
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',    
  },

  // icon: {
  //   color: 'rgba(255, 255, 255, 0.54)'
  // },
  
  imageList: {
    width: 500,
    height: 450,
  },  
}
export default CustomImageList;

import Glider from 'react-glider';
import 'glider-js/glider.min.css';

function Carrousel({ children }) {
  return (
    <Glider
      draggable
      hasDots
      slidesToShow={2.5}
      slidesToScroll={1}
      responsive={
        [
          {
            // screens greater than >= 319px
            breakpoint: 319,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1,
              itemWidth: 200,
              duration: 0.25
            }
          },
          {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2.5,
              slidesToScroll: 'auto',
              itemWidth: 150,
              duration: 0.25
            }
          },
          {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
              itemWidth: 150,
              duration: 0.25
            }
          }
        ]
      }
    >
      {children}
    </Glider>
  );
}

export { Carrousel };

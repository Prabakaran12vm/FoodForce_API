import fetch from 'cross-fetch';

export const getRestaurants = async (req, res) => {
  const { lat, lng } = req.query;
  // console.log({lat, lng});
  const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
      },
    });

    if (!response.ok) {
      throw new Error('network response was not ok');
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.error(`Error while fetching restaurant data ${err}`);
  }
};

export const getRestaurantMenu = async (req, res) => {
  const restaurantId = +req.params.id;
  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=${restaurantId}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
      },
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.error(`Error while fetching restaurant menu ${err}`);
  }
};
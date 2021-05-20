const RestaurantModule = (function(){

  const restaurants = [
      {
        restaurantId: 1,
        location: "Karl Johan",
        image: "1.jpg",
        openingHours: "11:00-23:00",
        telephone: 71582859,
      },
      {
        restaurantId: 2,
        location: "Operaen",
        image: "2.jpg",
        openingHours: "11:00-23:00",
        telephone: 92938283,
      },
      {
        restaurantId: 3,
        location: "Stovner",
        image: "3.png",
        openingHours: "11:00-23:00",
        telephone: 60003005,
      },
      {
        restaurantId: 4,
        location: "Bislett",
        image: "4.png",
        openingHours: "11:00-23:00",
        telephone: 90901090,
      }
    ];

    const getAll = () => restaurants;

    return {
        getAll
    }

} ())

export default RestaurantModule;

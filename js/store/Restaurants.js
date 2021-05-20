const RestaurantModule = (function(){

  const restaurants = [
      {
        restaurantId: 1,
        location: "Karl Johan",
        image: "",
        openingHours: "",
        telephone: 71582859,
      },
      {
        restaurantId: 2,
        location: "Operaen",
        image: "",
        openingHours: "",
        telephone: 92938283,
      },
      {
        restaurantId: 3,
        location: "Stovner",
        image: "",
        openingHours: "",
        telephone: 60003005,
      },
      {
        restaurantId: 4,
        location: "Bislett",
        image: "",
        openingHours: "",
        telephone: 90901090,
      }
    ];

    const getAll = () => restaurants;

    return {
        getAll
    }

} ())

export default RestaurantModule;

const processDataUsingPostalCode = (result) => {

    const postalCodes = result.reduce((acc, val) => {
        return acc.concat({latitude: val.latitude, longitude: val.longitude, postalCode: val.postal_code});
    }, []);

    const processData = result.reduce((acc, val) => {
        const {postal_code, ...rest} = val;
        if (!isInTheArray(val, acc)) {
            const codes = postalCodes.filter((code) => code.latitude === val.latitude && code.longitude === val.longitude);
            const codesWithoutLatitudeAndLongitude = getPostalsWithoutLatitudeAndLongitude(codes);
            return acc.concat(Object.assign({}, rest, {postalCodes: codesWithoutLatitudeAndLongitude}))
        }

        return acc
    }, []);

    return processData;
};

const isInTheArray = (city, cityArrays) => {
    return cityArrays.filter(val => val.latitude === city.latitude && val.longitude === city.longitude).length > 0;
};

const getPostalsWithoutLatitudeAndLongitude = (postals) => {
  return  postals.reduce((acc, val) => {
        return acc.concat(val.postalCode)
    }, [])
};

export {processDataUsingPostalCode}
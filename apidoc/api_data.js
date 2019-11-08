define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "",
    "success": {
      "examples": [
        {
          "title": "Success-Resopnse:",
          "content": "HTTP/1.1 200 OK\n{\n     data : {\n       message: 'Server up!!'\n     },\n    _links: {\n      'getByPostalCode': '/postalcode/:postalCode',\n      'getByName': '/cityname/:idName',\n      'getAllCitiesOfAProvince': '/province/:idName',\n      'getCityByCoordinates': '/coordinates/:latitude/:longitude'\n      },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "group": "_home_oussama_Projects_personal_postal_codes_backend_src_routes_index_js",
    "groupTitle": "_home_oussama_Projects_personal_postal_codes_backend_src_routes_index_js",
    "name": "Get"
  }
] });

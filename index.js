function filterById(jsonObject, id) {
    return jsonObject.filter(
        function(jsonObject) {
            return (jsonObject['id'] == id);
        }
    )[0];
}

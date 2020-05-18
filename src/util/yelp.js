const apiKey = 'a0NImdn27QkirjE1jMsh6Bb5QDK08UP4qxqwNMs1hgqlvKpXbSCUgv6J3JYgeCkNHjpZ9pE45xsUAigp4oC51tVliX1PRzxjDXWaTtqDJkOleAs00bXtARclYK_CXnYx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: { Authorization: `Bearer ${apiKey}` }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipcode: business.location.zip_code,
                        category: business.categories[0].alias,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
}

export default Yelp;
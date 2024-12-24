# Movie Database App 🎬

A React-based application that fetches and displays movie information from the [Dummy API](https://dummyapi.online/api/movies).

---

## Features
- Fetches movie data dynamically from the API.
- Displays movie titles, IMDb ratings, and links to IMDb pages.
- Placeholder images for missing posters.
- Responsive and clean design.

---

## Demo Screenshot
Add your demo screenshot here:  
![image](https://github.com/user-attachments/assets/042c387e-ab4d-41f4-a42e-70579b851d9c)


---

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/dharmesh-kashyap/CineVault.git
   cd movie-database
   ```
2. Install Dependencies
   ```bash
     npm install
   ```
3. Start the development server
    ```bash
     npm start
   ```
4. Open the app in your browser
    ```bash
     http://localhost:3000
   ```
    
## API Details

### Endpoint
- **URL**: `https://dummyapi.online/api/movies`

### Response Format
The API returns movie data in the following JSON format:

 ```json
 {
  "id": 1,
  "movie": "The Shawshank Redemption",
  "rating": 9.2,
  "image": "images/shawshank.jpg",
  "imdb_url": "https://www.imdb.com/title/tt0111161/"
}
 ```

### Fields
- **movie**: Title of the movie.
- **rating**: IMDb-style rating.
- **image**: Relative path to the poster (handled with a placeholder if unavailable).
- **imdb_url**: URL to the IMDb page for the movie.

### Technologies Used
- **React**: Frontend framework.
- **Axios**: For API requests.
- **CSS**: For styling the app.



/* General Styling */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

/* Header (Menu Bar) */
header {
    background-color: #6f4e37;
    color: white;
    padding: 20px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}

nav li {
    margin: 0 15px;
}

nav a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: color 0.3s;
}

nav a:hover {
    color: #e0a96d;
}

/* Gallery Section */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

/* Photo Hover Animation */
.photo-container {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.photo-container img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s;
}

.photo-container:hover img {
    transform: scale(1.05);
}

/* Like Button Animation */
.like-btn {
    position: absolute;
    right: -80px;
    bottom: 10px;
    background: #6f4e37;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: right 0.3s ease-in-out;
    border-radius: 5px;
}

.photo-container:hover .like-btn {
    right: 10px;
}

.like-btn:hover {
    background: #e0a96d;
}

/* Contact Form */
form input, form textarea {
    display: block;
    width: 80%;
    margin: 10px auto;
    padding: 10px;
}

button {
    padding: 10px;
    background-color: #6f4e37;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #e0a96d;
}

/* Footer */
footer {
    margin-top: 50px;
    padding: 20px;
    background: #6f4e37;
    color: white;
}

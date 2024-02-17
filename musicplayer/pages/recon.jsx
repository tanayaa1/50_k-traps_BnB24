// import { useState } from 'react';
// import axios from 'axios';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default function Shazam() {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('upload_file', file);
//     console.log("Inside recon")
//     const options = {
//       method: 'POST',
//       url: 'https://shazam-api6.p.rapidapi.com/shazam/recognize/',
//       headers: {
//         'X-RapidAPI-Key': '778f33a79emsh0a59a326c68d68dp1eea41jsn1f82a19e5412',
//         'X-RapidAPI-Host': 'shazam-api6.p.rapidapi.com',
//         'Content-Type': 'multipart/form-data',
//       },
//       data: formData,
//     };

//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Shazam API Upload</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" accept=".mp3" onChange={handleFileChange} />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }
import { useState } from 'react';
import axios from 'axios';


export const config = {
    api: {
        bodyParser: false,
    },
};

export default function Shazam() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('upload_file', file);

        const options = {
            method: 'POST',
            url: 'https://shazam-api6.p.rapidapi.com/shazam/recognize/',
            headers: {
                'X-RapidAPI-Key': '2NXpXxCJSHmshQc6rgBxJAngB5Orp14ok76jsnb9XUcWR0VGFt',
                'X-RapidAPI-Host': 'shazam-api6.p.rapidapi.com',
                'Content-Type': 'multipart/form-data',
            },
            data: formData,
        };
        console.log("Inside recon")
        try {
            const response = await axios.request(options);
            console.log(response.data);
            console.log(response.data.track.title);
            console.log(response.data.track.subtitle);
            if (response.data && response.data.track && response.data.track.title && response.data.track.subtitle) {
                setTitle(response.data.track.title);
                setSubtitle(response.data.track.subtitle);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const pageStyles = {
        backgroundImage: 'url("https://orig00.deviantart.net/d76a/f/2009/341/3/0/d_green_black_gradient_by_halaxega.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', // Set to 'no-repeat' to prevent the background image from repeating
        backgroundPosition: 'center',
        backgroundColor: '#000', // black background
        color: '#fff', // white text
        margin: 0,
        padding: 0,
        minHeight: '100vh', // Ensure the background covers the entire viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
    };
    const headingStyles = {
        fontSize: '32px', // Increase the font size as needed
        fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
        color: '#fff',
        marginBottom: '8px',
        textAlign: 'center',
    };

    const paragraphStyles = {
        fontSize: '20px', // Increase the font size as needed
        fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
        color: '#b3b3b3', // Spotify uses a slightly muted white for secondary text
        marginBottom: '16px',
    };

    const buttonStyles = {
        fontSize: '16px',
        fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
        color: '#fff',
        backgroundColor: '#1DB954', // Spotify green color
        border: 'none',
        borderRadius: '20px',
        padding: '10px 20px',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
        transition: 'background-color 0.3s ease',
    };

    const handleHover = (e) => {
        e.target.style.backgroundColor = '#25A55E'; // Darker green on hover
    };

    const handleLeave = (e) => {
        e.target.style.backgroundColor = '#1DB954';
    };
    const centerContentStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    const centerImageStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh', // Adjust as needed
    };

    return (

        <div style={pageStyles}>



            <h1 style={headingStyles}>Humming a tune...wanna find out which song it is? 🎶🎵🎼 </h1>
            <div style={centerImageStyles}>
                <img src="https://thumbs.dreamstime.com/b/abstract-music-background-simple-colorful-pastel-notes-cd-compact-disc-33724845.jpg" alt="Centered Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            <form style={centerContentStyles} onSubmit={handleSubmit}>
                <input type="file" accept=".mp3" onChange={handleFileChange} />
                <button type="submit"
                    style={buttonStyles}
                    onMouseOver={handleHover}
                    onMouseLeave={handleLeave}>Upload</button>
            </form>
            {/* {title && subtitle && (
        <div>
          <h2>Title: {title}</h2>
          <h3>Subtitle: {subtitle}</h3>
        </div>
      )} */}

            <div>

            </div>
        </div>

    );
}

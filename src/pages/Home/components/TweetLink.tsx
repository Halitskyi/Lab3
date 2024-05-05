import React from 'react';

const TweetLink = () => {
    return (
        <a
            href="https://twitter.com/intent/tweet?text=🎨  Flat UI Colors 2 - 280 handpicked colors for your projects 📝 %20http%3A//flatuicolors.com%20via%20%40ahmetsulek&amp;related=ahmetsulek"
            target="_blank"
            className="w-full p-5 box-border bg-blue-950 inline-block rounded-md text-center mt-10 mb-5 text-white font-bold"
            rel="noopener noreferrer"
        >
            <div className="tweet">
                <i></i>
                <span>💞 Tweet and share your love for Flat UI Colors</span>
            </div>
        </a>
    )
}

export default TweetLink;

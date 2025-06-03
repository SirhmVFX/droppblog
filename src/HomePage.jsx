  import React from 'react';
  import HomeHeader from '../HomeHeader';
  import PostCard from './PostCard';
  import image1 from './Assets/image1.png'
  import image2 from './Assets/image2.png'

  function HomePage() {
    // This is just dummy data for posts
    const posts = [
      {
        title: "Be Grateful, They Said",
        author: "Shantta May",
        date: "June 1 2025",
        summary: "How putting life in perspective almost broke me.",
        image: image1,
      },
      {
        title: "What If You’re Not Meant to Be Exceptional? The Gift of an Ordinary Life.",
        author: "Charles Black",
        date: "May 25 2025",
        summary: "When the world tells you to be exceptional, a quiet, content life can feel like defeat — until you realize it’s freedom.",
        image: image2,
      },
      {
        title: "Build a Brand not a Business",
        author: "Victor (IS HIM)",
        date: "May 31 2025",
        summary: "Rise above the noise that clutters your thinking.",
        image: "https://source.unsplash.com/random/300x300?linkedin",
      },
    ];

    return (
       <div style={{}}>
        <HomeHeader />

        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
            summary={post.summary}
            image={post.image}
          />
        ))}
      </div>
    );
  }

  export default HomePage;
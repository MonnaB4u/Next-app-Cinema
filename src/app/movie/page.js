
import HeroSection from '../components/HeroSection'
import Link from 'next/link'
import styles from "../styles/common.module.css"
import MovieCard from '../components/MovieCard';

const page = async () => {

  const url = process.env.rapid_key;

  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'ba9922eec6msh1a2d7cd766b54c2p125e88jsn3e04c8fc21a4',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data.jawSummary)

  return (
    <div>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {
              main_data.map((curElem) => {
                return <MovieCard key={curElem.id} {...curElem} />
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default page

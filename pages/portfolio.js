import Image from 'next/image';
import style1 from "../images/style1.jpg";
import style2 from "../images/style2.jpg";
import style3 from "../images/style3.jpg";
import style4 from "../images/style4.jpg";
import style5 from "../images/style5.jpg";
import style6 from "../images/style6.jpg";
import Title from '../components/Title';
import Container from '../layout/Container';


const Portfolio = () => {
    
    const hairPhotos = [
        {
            id: 1,
            name: "Pony",
            photo: style1
        },
        {
            id: 2,
            name: "Wave",
            photo: style2
        },
        {
            id: 3,
            name: "Bride",
            photo: style3
        },
        {
            id: 4,
            name: "Retro",
            photo: style4
        },
        {
            id: 5,
            name: "Rihanna",
            photo: style5
        },
        {
            id: 6,
            name: "Curly Retro",
            photo: style6
        }
    ]


  return (
    <section className='w-full text-black pt-20 dark:text-white'>
        <Title title="See Our Work" subtitle="Our Work" />
        <Container>
            {hairPhotos.map(photo => (
                <div className='space-y-3' key={photo.id}>
                    <Image src={photo.photo} alt={photo.name} className="rounded-sm" />
                    <h2 className='text-center font-bold text-xl'>{photo.name}</h2>
                </div>
            ))}
        </Container>
    </section>
  )
}

export default Portfolio;
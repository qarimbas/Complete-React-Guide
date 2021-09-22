import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from "mongodb";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://www.lux-review.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/03/Palma-de-Mallorca-1.jpg.webp',
        address: 'Some address 5, 12345 Palma',
        description: 'This is a first meetup!',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://lp-cms-production.imgix.net/2020-11/Bermuda.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1',
        address: 'Some address 5, 12345 Bermuda',
        description: 'This is a first meetup!',
    },
];


function HomePage(props) {

    return <MeetupList meetups={props.meetups}/>
}

export async function getStaticProps() {
    //fetch data from an API

    const client = await MongoClient.connect('mongodb+srv://john_wick:johnwicksdogs@cluster0.bh91r.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 10
    };
}

export default HomePage;
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            image="https://www.lux-review.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/03/Palma-de-Mallorca-1.jpg.webp"
            title="First Meetup" address="La Palma Mallorca" description="This is a first meetup"/>
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: "https://www.lux-review.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/03/Palma-de-Mallorca-1.jpg.webp",
                id: meetupId,
                title: 'First Meetup',
                address: "La Palma Mallorca",
                description: "This is a first meetup"
            },
        },
    };
}


export default MeetupDetails;
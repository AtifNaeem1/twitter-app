import Grid from '@mui/material/Grid';
import Header from '../organisms/Header';
import { gql, useQuery, useMutation } from '@apollo/client';
import Tweet from '../organisms/Tweet';
import NewTweet from '../organisms/NewTweet';
import { useAuth0 } from '@auth0/auth0-react';

const TweetPage = () => {
  const { logout } = useAuth0();
  const GET_Tweets = gql`
    query {
      Tweets {
        Author {
          username
          full_name
          avatar_url
        }
        date
        body
        isRead
      }
    }
  `;

  const DELETE_TWEET = gql`
    mutation ($deleteTweetId: ID!) {
      deleteTweet(id: $deleteTweetId) {
        id
        body
        date
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_Tweets);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Some Error occured</div>;
  }

  return (
    <Grid
      container
      sx={{
        border: '0.1px ridge grey',
        width: '800px',
        margin: 'auto',
        marginTop: '100px',
      }}
      role="main-grid"
      direction="column"
    >
      <Header />
      {data.Tweets.map((tweet: any) => {
        return (
          <Tweet
            imgSrc={tweet.Author.avatar_url}
            fullName={tweet.Author.full_name}
            userName={tweet.Author.username}
            date={tweet.date}
            body={tweet.body}
            isRead={tweet.isRead}
          />
        );
      })}
      <NewTweet />
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    </Grid>
  );
};

export default TweetPage;

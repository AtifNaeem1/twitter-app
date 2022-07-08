import Grid from '@mui/material/Grid';
import Header from '../organisms/Header';
import { gql, useQuery, useMutation } from '@apollo/client';
import Tweet from '../organisms/Tweet';
import NewTweet from '../organisms/NewTweet';

const TweetPage = () => {
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

  console.log({ error, loading, data });
  console.log(data.Tweets[0].body);
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
    </Grid>
  );
};

export default TweetPage;

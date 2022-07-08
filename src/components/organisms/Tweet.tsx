import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TwitterVerified from '../images/TwitterVerified.jpg';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  imgSrc: String;
  fullName: String;
  userName: String;
  date: Date;
  body: String;
  isRead: Boolean;
}

const Tweet = (props: Props) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date =
    props.date.toString().substring(8, 10) +
    ' ' +
    monthNames[parseInt(props.date.toString().substring(5, 7))];

  return (
    <>
      <Grid
        item
        container
        role="tweet"
        sx={{
          width: '100%',
        }}
        direction="row"
      >
        <Box>
          <Avatar
            alt="Remy Sharp"
            src="https://robohash.org/15cc302a3b846bfe131d983f00b263b7?set=set4&bgset=&size=400x400"
            sx={{
              marginLeft: '30px',
              marginTop: '20px',
              width: 56,
              height: 56,
            }}
          />
        </Box>
        <Box sx={{ width: '700px' }}>
          <Stack
            sx={{
              marginLeft: '25px',
              marginTop: '10px',
              width: '669px',
              height: '30px',
            }}
            direction="row"
            display="flex"
          >
            <Stack sx={{ width: '90%' }} direction="row">
              <Typography
                variant="h6"
                children={props.fullName}
                sx={{ fontWeight: 'bold' }}
              />
              <Avatar
                alt="Remy Sharp"
                src={TwitterVerified}
                sx={{
                  height: '20px',
                  width: '20px',
                  marginTop: '5px',
                  marginLeft: '3px',
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  fontSize: '15px',
                  marginTop: '3px',
                  marginLeft: '5px',
                }}
              >
                @{props.userName}
              </Typography>
            </Stack>
            <Typography variant="subtitle1" sx={{}}>
              {date}
            </Typography>
          </Stack>
          <Stack
            sx={{
              marginLeft: '25px',
              marginTop: '3px',
              width: '659px',
            }}
            direction="column"
            display="flex"
          >
            <Typography variant="body1" children={props.body} />
            <Stack direction="row">
              <Box sx={{ width: '95%' }}>
                {props.isRead === false && (
                  <Button
                    variant="outlined"
                    startIcon={<AutoStoriesIcon />}
                    sx={{
                      width: '150px',
                      textTransform: 'none',
                      color: 'black',
                      border: 'none',
                    }}
                  >
                    Mark as Read
                  </Button>
                )}
              </Box>
              <IconButton
                aria-label="upload picture"
                component="span"
                onClick={() => console.log('Delete')}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      />
    </>
  );
};

export default Tweet;

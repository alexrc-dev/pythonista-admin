import withAuth from "../../hocs/withAuth";
import Layout from "../../components/Layout";
import {Typography, Paper, Divider, Grid, CircularProgress, Box} from "@mui/material";
import {AccountCircle, TrendingUp, Event} from "@mui/icons-material";
import {useClientStats} from "../../services/clients.service";
import {formatter} from "../../utils/contentResources";

type DetailCardProps = {
  title: string
  icon: any
  bgcolor: string
  content: any,
  children: any,
};

const DetailCard = (props: DetailCardProps) => {
  return (
    <Box sx={{width: '100%'}}>
      <Box component={Paper} elevation={4} sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflowWrap: 'break-word',
        overflow: 'visible'
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: 1,
          pl: 2,
          pr: 2,
          background: 'transparent'
        }}>{/*Header*/}
          <Box sx={{ //Banner colored
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 64,
            height: 64,
            mt: '-24px',
            background: props.bgcolor,
            color: '#fff',
            borderRadius: '0.75rem'
          }} component={Paper} elevation={6}>
            {props.icon}
          </Box>
          <Box sx={{textAlign: 'right', lineHeight: '1.25', color: 'rgb(52, 71, 103)'}}>{/*Text Content*/}
            <Typography gutterBottom variant="button"
                        sx={{textTransform: 'none', fontWeight: '300', color: 'rgb(123,128,154)'}}>
              {props.title}
            </Typography>
            <Typography variant="h4">{props.content}</Typography>
          </Box>
        </Box>
        <Divider sx={{mt: 1, mb: 1}}/>
        <Box sx={{p: 2, pt: 0}}>
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

const App = () => {
  const clientStats = useClientStats();

  return (
    <Layout title={"Dashboard"}>
      <Grid sx={{mt: 2}} container spacing={4}>
        <Grid item md={6}>
          <DetailCard title="Users" icon={<AccountCircle/>} bgcolor={'#ff3d00'}
                      content={clientStats.loading ?
                        <CircularProgress size={24}/> : clientStats.data ? clientStats.data.users_count : ''}>
            <Typography sx={{color: 'rgb(123, 128, 154)', textTransform: 'none', fontWeight: '300'}} variant={"button"}>
              {/*<strong style={{color: '#4caf50',}}>+55%</strong> than yesterday*/}
              <span/>
            </Typography>
          </DetailCard>
        </Grid>
        <Grid item md={6}>
          <DetailCard title="Balance" icon={<TrendingUp/>} bgcolor={'#00bcd4'} content={clientStats.loading ?
            <CircularProgress size={24}/> : formatter.format(clientStats.data ? clientStats.data.money_count : 0)}>
            <Typography sx={{color: 'rgb(123, 128, 154)', textTransform: 'none', fontWeight: '300'}} variant={"button"}>
              {/* <strong style={{color: '#4caf50',}}>+1%</strong> than yesterday*/}
            </Typography>
          </DetailCard>
        </Grid>
        <Grid item md={6}>
          <DetailCard title="Subscriptions" icon={<AccountCircle/>} bgcolor={'#7b1fa2'} content={clientStats.loading ?
            <CircularProgress size={24}/> : clientStats.data ? clientStats.data.subscriptions_count : ''}>
            <Typography sx={{color: 'rgb(123, 128, 154)', textTransform: 'none', fontWeight: '300'}} variant={"button"}>
              {/*<strong style={{color: '#4caf50',}}>10</strong> new today*/}
            </Typography>
          </DetailCard>
        </Grid>

        <Grid item md={6}>
          <DetailCard title="Events" icon={<Event/>} bgcolor={'#e91e63'} content={clientStats.loading ?
            <CircularProgress size={24}/> : clientStats.data ? clientStats.data.events_count : ''}>
            <Typography sx={{color: 'rgb(123, 128, 154)', textTransform: 'none', fontWeight: '300'}} variant={"button"}>
              {/*<strong style={{color: '#4caf50',}}>10</strong> new today*/}
            </Typography>
          </DetailCard>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;

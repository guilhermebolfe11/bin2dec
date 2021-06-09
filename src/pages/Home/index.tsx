import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import { GitHub, BugReport } from '@material-ui/icons';

const Home: React.FC = () => {
  const [number, setNumber] = useState<number>();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const convertToDec = (bin: string) => {
    let convertedNum = 0;
    bin
      .split('')
      .reverse()
      .forEach((item: string, index: number) => {
        if (item === '1') convertedNum += 2 ** index;
      });
    return convertedNum;
  };

  const handleOnChange = (bin: string) => {
    if (bin.length > 0) {
      const regexp = new RegExp('\\b[01]+\\b');

      if (!regexp.test(bin)) {
        setError(true);
        setMessage('Enter only 0 or 1');
        return;
      }
      setError(false);
      setMessage('');

      const dec = convertToDec(bin);
      setNumber(dec);
    } else setNumber(undefined);
  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ minHeight: 'calc(100vh - 65px)' }}
      >
        <Grid item>
          <Card elevation={3} style={{ minWidth: 300 }}>
            <CardHeader title="Bin2Dec" />
            <CardContent>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                alignContent="center"
              >
                <Grid item style={{ marginBottom: 10 }}>
                  <TextField
                    name="bin"
                    variant="outlined"
                    label="Binary"
                    fullWidth
                    autoComplete="off"
                    error={error}
                    helperText={message || ''}
                    onChange={e => handleOnChange(e.target.value)}
                    inputProps={{
                      maxLength: 24,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6">{number}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Toolbar style={{ height: 65 }}>
        <Typography variant="body2" style={{ flexGrow: 1 }}>
          {`© Guilherme Bolfe ${new Date().getFullYear()}`}
        </Typography>
        <IconButton
          href="https://github.com/guilhermebolfe11/bin2dec"
          target="_blank"
        >
          <GitHub />
        </IconButton>
        <IconButton
          href="https://github.com/guilhermebolfe11/bin2dec/issues/new"
          target="_blank"
        >
          <BugReport />
        </IconButton>
      </Toolbar>
    </>
  );
};

export default Home;

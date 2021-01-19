import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Email é invalido').required('Obrigatório'),
    password: Yup.string().required('Obrigatório'),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Grid container direction="row" alignItems="center" justify="center">
      <Grid item>
        <Card elevation={3} style={{ minWidth: 300 }}>
          <CardHeader title={t('SignIn.Title')} />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                direction="column"
                alignItems="center"
                justify="center"
                alignContent="center"
              >
                <Grid item style={{ marginBottom: 10 }}>
                  <TextField
                    name="email"
                    variant="outlined"
                    label="Email address"
                    fullWidth
                    inputRef={register}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                  />
                </Grid>
                <Grid item style={{ marginBottom: 10 }} />
                <Grid item style={{ marginBottom: 10 }} />
                <Grid item style={{ marginBottom: 10 }} />
                <Grid item />
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;

/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Rewards: {
            screens: {
              Rewards: 'one',
            },
          },
          Nol: {
            screens: {
              Nol: 'two',
            },
          },
          Careemdelivery: {
            screens: {
              Careemdelivery: 'Three',
            },
          },
          Settings: {
            screens: {
              Settings: 'Four',
            },
          },
          Stepcounter: {
            screens: {
              Stepcounter: 'Five',
            },
          },
          Noondelivery: {
            screens: {
              Noondelivery: 'Six',
            },
          },
          Instashop: {
            screens: {
              Instashop: 'Seven',
            },
          },

          Account: {
            screens: {
              Account: 'Eight',
            },
          },

        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;

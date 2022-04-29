// a test for to see if Jotaro Kujo is rendering on the page as a listitem (role) and that the words are there as well. First lets steal the information from the api to create our fake jotaro. we are going to to Josuke, instead.

import { render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const josuke = {
  stand_image:
    'https://static.jojowiki.com/images/thumb/b/b5/latest/20191015213039/Crazy_Diamond_Infobox_Anime.png/270px-Crazy_Diamond_Infobox_Anime.png',
  stand_type: ['Close-Range', 'Natural Humanoid'],
  user_image:
    'https://static.jojowiki.com/images/thumb/4/49/latest/20191223040816/Josuke_DU_Infobox_Anime.png/270px-Josuke_DU_Infobox_Anime.png',
  user: 'Josuke Higashikata',
  Stand: 'Crazy Diamond',
  gender: 'Male',
  hair_color: 'Black',
  eye_color: 'Blue',
};

//next up we are creating a fake server, the res of which will eat our josuke up there.

const server = setupServer(
  rest.get(`https://jojoapi.herokuapp.com`, (req, res, ctx) =>
    res(ctx.json([josuke]))
  )
);

//now some instructions for our server

beforeAll(() => server.listen());
afterAll(() => server.close());

test('Should give us a list item with Josukes name in it', async () => {
  render(<App />);
  screen.debug();
});

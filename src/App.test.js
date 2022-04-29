// a test for to see if Jotaro Kujo is rendering on the page as a listitem (role) and that the words are there as well. First lets steal the information from the api to create our fake jotaro. we are going to to Josuke, instead.

import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const jotaro = {
  stand_image:
    'https://static.jojowiki.com/images/thumb/c/ca/latest/20191015215651/Star_Platinum_SC_Infobox_Anime.png/270px-Star_Platinum_SC_Infobox_Anime.png',
  stand_type: ['Close-Range', 'Reconnaissance', 'Natural Humanoid'],
  user_image:
    'https://static.jojowiki.com/images/thumb/3/3a/latest/20200315224152/Jotaro_SC_Infobox_Anime.png/270px-Jotaro_SC_Infobox_Anime.png',
  user: 'Jotaro Kujo',
  Stand: 'Star Platinum',
  gender: 'Male',
  hair_color: 'Black',
  eye_color: 'Green',
};

//next up we are creating a fake server, the res of which will eat our josuke up there.

const server = setupServer(
  rest.get(`https://jojoapi.herokuapp.com/StardustCrusaders`, (req, res, ctx) =>
    res(ctx.json([jotaro]))
  )
);

//now some instructions for our server

beforeAll(() => server.listen());
afterAll(() => server.close());

test('Should give us a list item with Josukes name in it', async () => {
  render(<App />);
  const li = await screen.findAllByRole('listitem', { timeout: 3000 });
  screen.debug(li);
  expect(li[0]).toBeInTheDocument();
});

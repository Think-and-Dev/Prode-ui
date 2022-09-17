import { Typography } from '@material-ui/core';
import React from 'react';
import { Bracket, Seed, SeedItem, SeedTeam, SeedTime, RoundProps, RenderSeedProps } from 'react-brackets';
import rounds from './brackets.mock'

const RenderSeed = ({ breakpoint, seed }) => {
  return (
    <Seed mobileBreakpoint={breakpoint}>
      <SeedItem style={{ width: '100%', backgroundColor: '#333' }}>
        <div>
          <SeedTeam>
            {seed.teams?.[0].flag} {seed.teams?.[0].name || '-----------'}
          </SeedTeam>
          <div style={{ height: 1, backgroundColor: '#707070' }}></div>
          <SeedTeam>{seed.teams?.[0].flag} {seed.teams?.[1]?.name || '-----------'}</SeedTeam>
        </div>
      </SeedItem>
      <SeedTime mobileBreakpoint={breakpoint} style={{ fontSize: 9 }}>
        <Typography variant='caption'>{seed.date}</Typography>
      </SeedTime>
    </Seed>
  );
};

export default function Brackets() {
  
  return (
    <div style={{ margin: '32px', textAlign: 'center' }}>
      <Bracket
        mobileBreakpoint={767}
        rounds={rounds}
        renderSeedComponent={RenderSeed}
        swipeableProps={{ enableMouseEvents: true, animateHeight: true }}
      />
    </div>
  );
}

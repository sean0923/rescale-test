import React from 'react';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import RenderPropsFetch from '../RenderProps/RenderPropsFetch';

const url =
  'https://api.unsplash.com/search/photos?query=wanderlust&client_id=2b40617c6d2ad00426e7d2878a8591606ca3d55a2a7eb2cf50dae681bf9ff47c';

const SecondTest = () => {
  return (
    <div>
      <RenderPropsFetch url={url}>
        {({ data }) => {
          console.log('data: ', data);
          return (
            <div>
              <div>
                {data.results &&
                  data.results.map(({ id }) => {
                    return <div key={id}>{id}</div>;
                  })}
              </div>
            </div>
          );
        }}
      </RenderPropsFetch>
    </div>
  );
};

export default SecondTest;

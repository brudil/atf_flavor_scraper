import * as path from 'path';
import { promises as fs } from 'fs';
import * as x from 'x-ray';
import { tfaFetchers } from './vendors/TheFlavorApprentice';
import { flavorArtFetchers } from './vendors/FlavorArt';
import { flavorWestFetchers } from './vendors/FlavorWest';
import { capellaFetchers } from './vendors/Capella';

async function start() {
    // set up our x-ray instance to be used by all our fetchers
    const xray = x({
        filters: {
          strip: function (value) {
            return typeof value === 'string' ? value.replace(/^\s+|\s+$/g, '') : value
          }
        }
      });
    
      // run all our fetchers
    const fetchers = [
        ...tfaFetchers,
        ...flavorArtFetchers,
        ...flavorWestFetchers,
        ...capellaFetchers
    ].map(fetcher => fetcher(xray)); 

    console.log('Fetching flavors');
    // wait for all of them to finish
    const res = await Promise.all(fetchers)

    // combine all their results, and perform some generic filtering
    const flavors = res
        .reduce((prev, fetcherRes) => prev.concat(fetcherRes), [])
        .filter(flavor => !!flavor.name);
    console.log(`${flavors.length} flavors found! Saving...`);    
    await fs.writeFile(path.join(process.cwd(), './flavors.generated.json'), JSON.stringify(flavors), { encoding: 'utf-8', })

    console.log(`Saved to './flavors.generated.json'`);

}

// run the entire thing!
start();
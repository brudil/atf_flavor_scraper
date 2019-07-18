import { VendorFetcher, Vendor } from "../types";

const FlavorArtAll: VendorFetcher = (x) => new Promise((resolve, _reject) => {
        x('https://flavourart.com/en/store/flavors/?items_per_page=400&result_ids=pagination_contents', '.ty-grid-list__item', [{
            name: '.product-title | strip',
            url: '.product-title@href'
            }])((_err,data: any[]) => resolve(data
                .map((page: any) => ({
                    name: page.name,
                    url: page.url,
                    density: null,
                    vendor: Vendor.FlavorArt
                }))));
    });

    export const flavorArtFetchers = [FlavorArtAll]
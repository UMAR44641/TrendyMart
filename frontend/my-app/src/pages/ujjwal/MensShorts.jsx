import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import MensProductCard from "../../components/ujjwal/MensProductCard";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const MensShorts = () => {
  // {
  //     "image":"https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12612874_fpx.tif?$2014_BROWSE_FASHION$&            op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
  //     "url":"https://www.bloomingdales.com/shop/product/aqua-twill-knot-button-shorts-100-exclusive?ID=4552478&CategoryID=2910",
  //     "selection2":"AQUA",
  //     "selection2_url":"https://www.bloomingdales.com/shop/product/aqua-twill-knot-button-shorts-100-exclusive?ID=4552478&CategoryID=2910",
  //     "selection3":"Twill Knot Button Shorts - 100% Exclusive",
  //     "selection3_url":"https://www.bloomingdales.com/shop/product/aqua-twill-knot-button-shorts-100-exclusive?ID=4552478&CategoryID=2910"
  //     }
  let data = [
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12612874_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/aqua-twill-knot-button-shorts-100-exclusive?ID=4552478&CategoryID=2910",
      selection2: "AQUA",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/aqua-twill-knot-button-shorts-100-exclusive?ID=4552478&CategoryID=2910",
      selection3: "Twill Knot Button Shorts - 100% Exclusive",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/aqua-twill-knot-button-shorts-100-exclusive?ID=4552478&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/12043026_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/agolde-parker-high-rise-cotton-shorts?ID=4319695&CategoryID=2910",
      selection2: "AGOLDE",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/agolde-parker-high-rise-cotton-shorts?ID=4319695&CategoryID=2910",
      selection3: "Parker High Rise Cotton Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/agolde-parker-high-rise-cotton-shorts?ID=4319695&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/12265855_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/sandro-space-tweed-shorts?ID=4427147&CategoryID=2910",
      selection2: "Sandro",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/sandro-space-tweed-shorts?ID=4427147&CategoryID=2910",
      selection3: "Space Tweed Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/sandro-space-tweed-shorts?ID=4427147&CategoryID=2910",
      selection4: "INR 22,638.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/11271812_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/agolde-parker-long-jean-shorts?ID=3994775&CategoryID=2910",
      selection2: "AGOLDE",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/agolde-parker-long-jean-shorts?ID=3994775&CategoryID=2910",
      selection3: "Parker Long Jean Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/agolde-parker-long-jean-shorts?ID=3994775&CategoryID=2910",
      selection4: "INR 11,789.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/12337115_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/sweaty-betty-after-class-shorts?ID=4460413&CategoryID=2910",
      selection2: "Sweaty Betty",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/sweaty-betty-after-class-shorts?ID=4460413&CategoryID=2910",
      selection3: "After Class Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/sweaty-betty-after-class-shorts?ID=4460413&CategoryID=2910",
      selection4: "INR 4,955.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/12156807_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/joes-jeans-the-ozzie-cutoff-shorts?ID=4329911&CategoryID=2910",
      selection2: "Joe's Jeans",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/joes-jeans-the-ozzie-cutoff-shorts?ID=4329911&CategoryID=2910",
      selection3: "The Ozzie Cutoff Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/joes-jeans-the-ozzie-cutoff-shorts?ID=4329911&CategoryID=2910",
      selection4: "INR 10,935.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/12612880_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/aqua-cropped-twill-knot-button-blazer-twill-knot-button-shorts-twill-knot-button-pants-100-exclusive?ID=4613126&CategoryID=2910",
      selection2: "AQUA",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/aqua-cropped-twill-knot-button-blazer-twill-knot-button-shorts-twill-knot-button-pants-100-exclusive?ID=4613126&CategoryID=2910",
      selection3:
        "Cropped Twill Knot Button Blazer, Twill Knot Button Shorts & Twill Knot Button Pants - 100% Exclusive",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/aqua-cropped-twill-knot-button-blazer-twill-knot-button-shorts-twill-knot-button-pants-100-exclusive?ID=4613126&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/12292860_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/maje-italo-tweed-shorts?ID=4419883&CategoryID=2910",
      selection2: "Maje",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/maje-italo-tweed-shorts?ID=4419883&CategoryID=2910",
      selection3: "Italo Tweed Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/maje-italo-tweed-shorts?ID=4419883&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/10539081_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/eberjey-heather-slouchy-tee-slub-shorts?ID=3491320&CategoryID=2910",
      selection2: "Eberjey",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/eberjey-heather-slouchy-tee-slub-shorts?ID=3491320&CategoryID=2910",
      selection3: "Heather Slouchy Tee & Slub Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/eberjey-heather-slouchy-tee-slub-shorts?ID=3491320&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/12410123_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/aqua-tweed-shorts-100-exclusive?ID=4465006&CategoryID=2910",
      selection2: "AQUA",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/aqua-tweed-shorts-100-exclusive?ID=4465006&CategoryID=2910",
      selection3: "Tweed Shorts - 100% Exclusive",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/aqua-tweed-shorts-100-exclusive?ID=4465006&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12338424_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/sandro-dizzy-plaid-shorts?ID=4427145&CategoryID=2910",
      selection2: "Sandro",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/sandro-dizzy-plaid-shorts?ID=4427145&CategoryID=2910",
      selection3: "Dizzy Plaid Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/sandro-dizzy-plaid-shorts?ID=4427145&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12252434_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/maje-idrio-studded-denim-shorts?ID=4419879&CategoryID=2910",
      selection2: "Maje",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/maje-idrio-studded-denim-shorts?ID=4419879&CategoryID=2910",
      selection3: "Idrio Studded Denim Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/maje-idrio-studded-denim-shorts?ID=4419879&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12243558_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/susana-monaco-belted-shorts?ID=4405343&CategoryID=2910",
      selection2: "Susana Monaco",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/susana-monaco-belted-shorts?ID=4405343&CategoryID=2910",
      selection3: "Belted Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/susana-monaco-belted-shorts?ID=4405343&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/11967505_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/sweaty-betty-explorer-shorts?ID=4284140&CategoryID=2910",
      selection2: "Sweaty Betty",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/sweaty-betty-explorer-shorts?ID=4284140&CategoryID=2910",
      selection3: "Explorer Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/sweaty-betty-explorer-shorts?ID=4284140&CategoryID=2910",
      selection4: "INR 6,663.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/12673503_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/french-connection-rhodes-poplin-stripe-shorts?ID=4613710&CategoryID=2910",
      selection2: "FRENCH CONNECTION",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/french-connection-rhodes-poplin-stripe-shorts?ID=4613710&CategoryID=2910",
      selection3: "Rhodes Poplin Stripe Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/french-connection-rhodes-poplin-stripe-shorts?ID=4613710&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/12191652_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/year-of-ours-zuma-t-shirt-poolside-shorts?ID=4397074&CategoryID=2910",
      selection2: "Year of Ours",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/year-of-ours-zuma-t-shirt-poolside-shorts?ID=4397074&CategoryID=2910",
      selection3: "Zuma T-Shirt & Poolside Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/year-of-ours-zuma-t-shirt-poolside-shorts?ID=4397074&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/11530737_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/aqua-athletic-knit-shorts-100-exclusive?ID=4052464&CategoryID=2910",
      selection2: "AQUA Athletic",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/aqua-athletic-knit-shorts-100-exclusive?ID=4052464&CategoryID=2910",
      selection3: "Knit Shorts - 100% Exclusive",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/aqua-athletic-knit-shorts-100-exclusive?ID=4052464&CategoryID=2910",
      selection4: "INR 4,955.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/12671525_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/agolde-parker-vintage-cutoff-denim-shorts-in-swapmeet?ID=2855131&CategoryID=2910",
      selection2: "AGOLDE",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/agolde-parker-vintage-cutoff-denim-shorts-in-swapmeet?ID=2855131&CategoryID=2910",
      selection3: "Parker Vintage Cutoff Denim Shorts in Swapmeet",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/agolde-parker-vintage-cutoff-denim-shorts-in-swapmeet?ID=2855131&CategoryID=2910",
      selection4: "INR 11,789.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/12390650_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/maje-ivaisa-flowy-shorts?ID=4465675&CategoryID=2910",
      selection2: "Maje",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/maje-ivaisa-flowy-shorts?ID=4465675&CategoryID=2910",
      selection3: "Ivaisa Flowy Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/maje-ivaisa-flowy-shorts?ID=4465675&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/10241036_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/alo-yoga-ambience-mesh-overlay-shorts?ID=3207491&CategoryID=2910",
      selection2: "Alo Yoga",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/alo-yoga-ambience-mesh-overlay-shorts?ID=3207491&CategoryID=2910",
      selection3: "Ambience Mesh-Overlay Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/alo-yoga-ambience-mesh-overlay-shorts?ID=3207491&CategoryID=2910",
      selection4: "INR 6,151.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12634704_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/aqua-high-rise-eyelet-embroidered-shorts-100-exclusive?ID=4587284&CategoryID=2910",
      selection2: "AQUA",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/aqua-high-rise-eyelet-embroidered-shorts-100-exclusive?ID=4587284&CategoryID=2910",
      selection3: "High Rise Eyelet Embroidered Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/aqua-high-rise-eyelet-embroidered-shorts-100-exclusive?ID=4587284&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/11871395_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/dl1961-karlie-boyfriend-shorts-in-westside?ID=4186252&CategoryID=2910",
      selection2: "DL1961",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/dl1961-karlie-boyfriend-shorts-in-westside?ID=4186252&CategoryID=2910",
      selection3: "Karlie Boyfriend Shorts in Westside",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/dl1961-karlie-boyfriend-shorts-in-westside?ID=4186252&CategoryID=2910",
      selection4: "INR 10,935.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/12698031_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/wayf-cameron-shorts?ID=4617979&CategoryID=2910",
      selection2: "WAYF",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/wayf-cameron-shorts?ID=4617979&CategoryID=2910",
      selection3: "Cameron Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/wayf-cameron-shorts?ID=4617979&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12636564_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/fp-movement-by-free-people-the-way-home-shorts?ID=4116243&CategoryID=2910",
      selection2: "FP Movement",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/fp-movement-by-free-people-the-way-home-shorts?ID=4116243&CategoryID=2910",
      selection3: "The Way Home Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/fp-movement-by-free-people-the-way-home-shorts?ID=4116243&CategoryID=2910",
      selection4: "INR 2,563.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12042719_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/pinko-quercia-printed-shorts?ID=4265384&CategoryID=2910",
      selection2: "PINKO",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/pinko-quercia-printed-shorts?ID=4265384&CategoryID=2910",
      selection3: "Quercia Printed Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/pinko-quercia-printed-shorts?ID=4265384&CategoryID=2910",
      selection4: "INR 25,201.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/11682596_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/susana-monaco-faux-leather-pleated-shorts?ID=4137426&CategoryID=2910",
      selection2: "Susana Monaco",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/susana-monaco-faux-leather-pleated-shorts?ID=4137426&CategoryID=2910",
      selection3: "Faux Leather Pleated Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/susana-monaco-faux-leather-pleated-shorts?ID=4137426&CategoryID=2910",
      selection4: "INR 13,498.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/12671513_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/agolde-parker-long-jean-shorts-in-swapmeet?ID=3892546&CategoryID=2910",
      selection2: "AGOLDE",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/agolde-parker-long-jean-shorts-in-swapmeet?ID=3892546&CategoryID=2910",
      selection3: "Parker Long Jean Shorts in Swapmeet",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/agolde-parker-long-jean-shorts-in-swapmeet?ID=3892546&CategoryID=2910",
      selection4: "INR 11,789.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12634619_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/aqua-high-rise-flounce-hem-shorts-100-exclusive?ID=4587283&CategoryID=2910",
      selection2: "AQUA",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/aqua-high-rise-flounce-hem-shorts-100-exclusive?ID=4587283&CategoryID=2910",
      selection3: "High Rise Flounce Hem Shorts - 100% Exclusive",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/aqua-high-rise-flounce-hem-shorts-100-exclusive?ID=4587283&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/12235577_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/maje-sequined-check-shorts-150th-anniversary-exclusive?ID=4394740&CategoryID=2910",
      selection2: "Maje",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/maje-sequined-check-shorts-150th-anniversary-exclusive?ID=4394740&CategoryID=2910",
      selection3:
        "Sequined Check Shorts - 150th Anniversary Exclusive Brand Name",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/maje-sequined-check-shorts-150th-anniversary-exclusive?ID=4394740&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12190474_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/alo-yoga-quilted-cropped-hoodie-quilted-boxing-shorts?ID=4396940&CategoryID=2910",
      selection2: "Alo Yoga",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/alo-yoga-quilted-cropped-hoodie-quilted-boxing-shorts?ID=4396940&CategoryID=2910",
      selection3: "Quilted Cropped Hoodie & Quilted Boxing Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/alo-yoga-quilted-cropped-hoodie-quilted-boxing-shorts?ID=4396940&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/12393796_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/alo-yoga-high-waist-biker-shorts?ID=3474969&CategoryID=2910",
      selection2: "Alo Yoga",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/alo-yoga-high-waist-biker-shorts?ID=3474969&CategoryID=2910",
      selection3: "High Waist Biker Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/alo-yoga-high-waist-biker-shorts?ID=3474969&CategoryID=2910",
      selection4: "- INR 5,809.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/12646477_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/theory-mini-shorts?ID=4625402&CategoryID=2910",
      selection2: "Theory",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/theory-mini-shorts?ID=4625402&CategoryID=2910",
      selection3: "Mini Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/theory-mini-shorts?ID=4625402&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12467964_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/alice-olivia-conry-striped-waist-shorts?ID=4467542&CategoryID=2910",
      selection2: "Alice and Olivia",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/alice-olivia-conry-striped-waist-shorts?ID=4467542&CategoryID=2910",
      selection3: "Conry Striped Waist Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/alice-olivia-conry-striped-waist-shorts?ID=4467542&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/11619096_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/maje-tailored-pocket-shorts?ID=4054337&CategoryID=2910",
      selection2: "Maje",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/maje-tailored-pocket-shorts?ID=4054337&CategoryID=2910",
      selection3: "Tailored Pocket Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/maje-tailored-pocket-shorts?ID=4054337&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/10741272_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/7-for-all-mankind-mid-rise-midroll-jean-shorts-in-broken-twill-plaza?ID=3603556&CategoryID=2910",
      selection2: "7 For All Mankind",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/7-for-all-mankind-mid-rise-midroll-jean-shorts-in-broken-twill-plaza?ID=3603556&CategoryID=2910",
      selection3: "Mid Rise Midroll Jean Shorts in Broken Twill Plaza",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/7-for-all-mankind-mid-rise-midroll-jean-shorts-in-broken-twill-plaza?ID=3603556&CategoryID=2910",
      selection4: "INR 14,523.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/12434410_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/hobbs-london-tulip-shorts?ID=4249193&CategoryID=2910",
      selection2: "HOBBS LONDON",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/hobbs-london-tulip-shorts?ID=4249193&CategoryID=2910",
      selection3: "Tulip Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/hobbs-london-tulip-shorts?ID=4249193&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/12699273_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/liverpool-los-angeles-kelsey-shorts?ID=4606519&CategoryID=2910",
      selection2: "Liverpool Los Angeles",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/liverpool-los-angeles-kelsey-shorts?ID=4606519&CategoryID=2910",
      selection3: "Kelsey Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/liverpool-los-angeles-kelsey-shorts?ID=4606519&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/12724212_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/alo-yoga-7-repetition-shorts?ID=3991054&CategoryID=3864",
      selection2: "Alo Yoga",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/alo-yoga-7-repetition-shorts?ID=3991054&CategoryID=3864",
      selection3: '7" Repetition Shorts',
      selection3_url:
        "https://www.bloomingdales.com/shop/product/alo-yoga-7-repetition-shorts?ID=3991054&CategoryID=3864",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/12267467_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/alice-olivia-donald-high-waist-shorts?ID=3598758&CategoryID=2910",
      selection2: "Alice and Olivia",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/alice-olivia-donald-high-waist-shorts?ID=3598758&CategoryID=2910",
      selection3: "Donald High Waist Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/alice-olivia-donald-high-waist-shorts?ID=3598758&CategoryID=2910",
      selection4: "INR 22,638.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/11871392_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/dl1961-karlie-boyfriend-shorts-in-puro?ID=4186247&CategoryID=2910",
      selection2: "DL1961",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/dl1961-karlie-boyfriend-shorts-in-puro?ID=4186247&CategoryID=2910",
      selection3: "Karlie Boyfriend Shorts in Puro",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/dl1961-karlie-boyfriend-shorts-in-puro?ID=4186247&CategoryID=2910",
      selection4: "INR 11,020.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/12562535_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/maje-leather-mori-shorts?ID=4419886&CategoryID=2910",
      selection2: "Maje",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/maje-leather-mori-shorts?ID=4419886&CategoryID=2910",
      selection3: "Leather Mori Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/maje-leather-mori-shorts?ID=4419886&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12603524_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/a.l.c.-bennett-pleated-shorts?ID=4605885&CategoryID=2910",
      selection2: "A.L.C.",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/a.l.c.-bennett-pleated-shorts?ID=4605885&CategoryID=2910",
      selection3: "Bennett Pleated Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/a.l.c.-bennett-pleated-shorts?ID=4605885&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/12479419_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/sandro-bambin-houndstooth-shorts?ID=4427150&CategoryID=2910",
      selection2: "Sandro",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/sandro-bambin-houndstooth-shorts?ID=4427150&CategoryID=2910",
      selection3: "Bambin Houndstooth Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/sandro-bambin-houndstooth-shorts?ID=4427150&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/10260888_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/alternative-victory-fleece-shorts?ID=1762423&CategoryID=3864",
      selection2: "ALTERNATIVE",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/alternative-victory-fleece-shorts?ID=1762423&CategoryID=3864",
      selection3: "Victory Fleece Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/alternative-victory-fleece-shorts?ID=1762423&CategoryID=3864",
      selection4: "INR 4,955.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/11985509_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/3.1-phillip-lim-side-belted-shorts?ID=4599209&CategoryID=2910",
      selection2: "3.1 Phillip Lim",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/3.1-phillip-lim-side-belted-shorts?ID=4599209&CategoryID=2910",
      selection3: "Side Belted Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/3.1-phillip-lim-side-belted-shorts?ID=4599209&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/12222311_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/liverpool-los-angeles-woven-utility-shorts?ID=4398632&CategoryID=2910",
      selection2: "Liverpool Los Angeles",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/liverpool-los-angeles-woven-utility-shorts?ID=4398632&CategoryID=2910",
      selection3: "Woven Utility Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/liverpool-los-angeles-woven-utility-shorts?ID=4398632&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/12562516_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/maje-linen-quillage-printed-shorts?ID=4419880&CategoryID=2910",
      selection2: "Maje",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/maje-linen-quillage-printed-shorts?ID=4419880&CategoryID=2910",
      selection3: "Linen Quillage Printed Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/maje-linen-quillage-printed-shorts?ID=4419880&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/12036817_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/sweaty-betty-on-your-marks-running-shorts?ID=4314289&CategoryID=2910",
      selection2: "Sweaty Betty",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/sweaty-betty-on-your-marks-running-shorts?ID=4314289&CategoryID=2910",
      selection3: "On Your Marks Running Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/sweaty-betty-on-your-marks-running-shorts?ID=4314289&CategoryID=2910",
      selection4: "INR 5,809.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/12341215_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/dkny-tie-faux-leather-high-waist-shorts?ID=4455471&CategoryID=2910",
      selection2: "DKNY",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/dkny-tie-faux-leather-high-waist-shorts?ID=4455471&CategoryID=2910",
      selection3: "Tie Faux Leather High Waist Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/dkny-tie-faux-leather-high-waist-shorts?ID=4455471&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12188704_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/marc-jacobs-the-t-shorts?ID=4368948&CategoryID=3865",
      selection2: "MARC JACOBS",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/marc-jacobs-the-t-shorts?ID=4368948&CategoryID=3865",
      selection3: "The T-Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/marc-jacobs-the-t-shorts?ID=4368948&CategoryID=3865",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12324608_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/alo-yoga-cropped-jacket-alumni-shorts?ID=4465113&CategoryID=2910",
      selection2: "Alo Yoga",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/alo-yoga-cropped-jacket-alumni-shorts?ID=4465113&CategoryID=2910",
      selection3: "Cropped Jacket & Alumni Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/alo-yoga-cropped-jacket-alumni-shorts?ID=4465113&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/11899765_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/vineyard-vines-everyday-shorts?ID=4207248&CategoryID=2910",
      selection2: "Vineyard Vines",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/vineyard-vines-everyday-shorts?ID=4207248&CategoryID=2910",
      selection3: "Everyday Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/vineyard-vines-everyday-shorts?ID=4207248&CategoryID=2910",
      selection4: "INR 5,809.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/11298477_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/monrow-vintage-shorts?ID=3933477&CategoryID=2910",
      selection2: "Monrow",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/monrow-vintage-shorts?ID=3933477&CategoryID=2910",
      selection3: "Vintage Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/monrow-vintage-shorts?ID=3933477&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/12434612_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/hobbs-london-chessie-shorts?ID=4249200&CategoryID=2910",
      selection2: "HOBBS LONDON",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/hobbs-london-chessie-shorts?ID=4249200&CategoryID=2910",
      selection3: "Chessie Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/hobbs-london-chessie-shorts?ID=4249200&CategoryID=2910",
      selection4: "INR 10,678.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/7/optimized/11377607_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/ag-wanderer-8.5-stretch-cotton-shorts?ID=3938027&CategoryID=3864",
      selection2: "AG",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/ag-wanderer-8.5-stretch-cotton-shorts?ID=3938027&CategoryID=3864",
      selection3: 'Wanderer 8.5" Stretch Cotton Shorts',
      selection3_url:
        "https://www.bloomingdales.com/shop/product/ag-wanderer-8.5-stretch-cotton-shorts?ID=3938027&CategoryID=3864",
      selection4: "INR 11,533.00",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/12708186_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/sweaty-betty-on-your-marks-4-running-shorts?ID=4619168&CategoryID=2910",
      selection2: "Sweaty Betty",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/sweaty-betty-on-your-marks-4-running-shorts?ID=4619168&CategoryID=2910",
      selection3: 'On Your Marks 4" Running Shorts',
      selection3_url:
        "https://www.bloomingdales.com/shop/product/sweaty-betty-on-your-marks-4-running-shorts?ID=4619168&CategoryID=2910",
    },
    {
      image:
        "https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/12385523_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
      url: "https://www.bloomingdales.com/shop/product/maje-ilonie-parachute-shorts?ID=4419878&CategoryID=2910",
      selection2: "Maje",
      selection2_url:
        "https://www.bloomingdales.com/shop/product/maje-ilonie-parachute-shorts?ID=4419878&CategoryID=2910",
      selection3: "Ilonie Parachute Shorts",
      selection3_url:
        "https://www.bloomingdales.com/shop/product/maje-ilonie-parachute-shorts?ID=4419878&CategoryID=2910",
    },
  ];

  console.log(data);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", border: "0px solid gray", margin: "5px" }}>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  CATEGORY
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <button>Pants</button>
                <button>Jeans & Denim</button>
                <button>Shorts</button>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <h2 style={{ alignContent: "flex-start", display: "flex" }}>
            FILTER BY
          </h2>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      ITEM TYPE
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Blazers</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Coats</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Dresses</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Jackets</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Jeans</label>
                    </div>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      ITEM TYPE
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Blazers</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Coats</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Dresses</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Jackets</label>
                    </div>
                    <div style={{margin:"10px",fontSize:"20px"}}>
                      <input type="checkbox" id="scales" name="itemType" />
                      <label for="scales"> Jeans</label>
                    </div>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
      <div
        style={{
          width: "80%",
          padding: "10px",
          margin: "5px",
          border: "1px solid balck",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <div>WOMEN'S CLOTHING (1-60 of 846 Items)</div>
          <div style={{ display: "flex" }}>
            <div>
              <label style={{ fontWeight: "bolder" }}>Sort By:</label>
              <select name="cars" id="cars">
                <option value="volvo">Featured</option>
                <option value="saab">New Arrival</option>
                <option value="mercedes">Best Sellers</option>
                <option value="audi">Price(high-low)</option>
                <option value="audi">Price(low-high)</option>
              </select>
            </div>
            <div>
              <label style={{ fontWeight: "bolder" }}>Page:</label>
              <select name="cars" id="cars">
                <option value="volvo">Featured</option>
                <option value="saab">New Arrival</option>
                <option value="mercedes">Best Sellers</option>
                <option value="audi">Price(high-low)</option>
                <option value="audi">Price(low-high)</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {data.map((el) => (
              <MensProductCard
                key={`${el.selection2}+${el.selection2_url}`}
                {...el}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default MensShorts;

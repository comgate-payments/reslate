'use strict';

const fs = require('fs');
const path = require('path');

// TODO remove any existing symlinks before recreating them

try {
  fs.symlinkSync(path.resolve('./node_modules/jquery/dist/jquery.min.js'),'./source/slate/js/lib/jquery.min.js');
  fs.symlinkSync(path.resolve('./node_modules/lunr/lunr.min.js'),'./source/slate/js/lib/lunr.min.js');
  fs.symlinkSync(path.resolve('./node_modules/imagesloaded/imagesloaded.pkgd.min.js'),'./source/slate/js/lib/imagesloaded.min.js');
}
catch (ex) {
  console.warn(ex.message);
}


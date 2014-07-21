Package.describe({
  summary: 'Raty - A jQuery star Rating Plugin'
})

Package.on_use(function (api) {

  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.add_files([
    'lib/fonts/raty.eot',
    'lib/fonts/raty.svg',
    'lib/fonts/raty.ttf',
    'lib/fonts/raty.woff',
    'lib/images/cancel-off.png',
    'lib/images/cancel-on.png',
    'lib/images/star-half.png',
    'lib/images/star-off.png',
    'lib/images/star-on.png',
    'lib/jquery.raty.css',
    'lib/jquery.raty.js'
  ], 
    'client'
  )

});

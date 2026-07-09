export const navMenu = [
  {
    label: 'Community Trips',
    children: [
      {
        label: 'Meghalaya',
        items: [
          { label: 'Meghalaya With Kaziranga 6N/7D', path: '/tours/meghalaya-kaziranga' },
          { label: 'Mystic Meghalaya 5N6D', path: '/tours?category=community' },
        ],
      },
      {
        label: 'Spiti Valley',
        items: [
          { label: 'Frozen Spiti Valley 6N/7D', path: '/tours/frozen-spiti' },
          { label: 'Spiti Tempo Expedition 6N7D', path: '/tours?category=spiti' },
        ],
      },
      {
        label: 'Bhutan',
        items: [
          { label: 'Bhutan Bound 7N/8D', path: '/tours/bhutan-bound' },
        ],
      },
      {
        label: 'International',
        items: [
          { label: 'Thailand Full Moon Party 6N7D', path: '/tours/thailand-full-moon' },
          { label: 'Vietnam Group Trip', path: '/tours/vietnam-group' },
          { label: 'Bali Group Trip', path: '/tours/bali-group' },
        ],
      },
    ],
  },
  {
    label: 'Bike Trips',
    children: [
      {
        label: 'Leh Ladakh',
        items: [
          { label: 'Manali to Srinagar 11N12D', path: '/tours/manali-srinagar-hanle' },
          { label: 'Leh Ladakh with Umling La 7N8D', path: '/tours/leh-umling-la' },
          { label: 'Leh to Leh with Turtuk 6N/7D', path: '/tours/leh-turtuk' },
        ],
      },
      {
        label: 'Spiti Valley',
        items: [
          { label: 'Spiti Bike Shipki La 9N10D', path: '/tours/spiti-shipki-la' },
          { label: 'Spiti Bike Trip 7N8D', path: '/tours/spiti-bike-7n8d' },
        ],
      },
      {
        label: 'Tawang',
        items: [
          { label: 'Tawang Bike Trip', path: '/tours/tawang-bike' },
        ],
      },
      {
        label: 'Bhutan',
        items: [
          { label: 'Bhutan Bike Expedition', path: '/tours/bhutan-chele-la' },
        ],
      },
    ],
  },
  {
    label: 'Deyor Luxec',
    path: '/tours?category=luxury',
    children: [
      { label: 'Maldives', path: '/tours?category=luxury' },
      { label: 'Dubai', path: '/tours?category=international' },
      { label: 'Singapore', path: '/tours?category=international' },
      { label: 'Japan', path: '/tours?category=international' },
      { label: 'Kashmir', path: '/tours?category=community' },
      { label: 'Andamans', path: '/tours?category=community' },
    ],
  },
  {
    label: 'Deyor World',
    path: '/tours?category=international',
    children: [
      { label: 'Vietnam', path: '/tours/vietnam-group' },
      { label: 'Bali', path: '/tours/bali-group' },
      { label: 'Thailand', path: '/tours/thailand-full-moon' },
      { label: 'Switzerland', path: '/tours?category=international' },
      { label: 'Turkey', path: '/tours?category=international' },
      { label: 'Greece', path: '/tours?category=international' },
    ],
  },
  { label: 'Corporate Bookings', path: '/contact' },
  { label: 'Blogs', path: '/about' },
];

export const PHONE = '+919870417123';
export const PHONE_DISPLAY = '9870417123';
export const EMAIL = 'care@deyor.in';
export const WHATSAPP_URL = 'https://wa.me/919870417123';

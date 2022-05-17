export function guideDetail(){
  let data = {
    name: 'Jackson Suhendar',
    shortBio: 'Leading to local heritage, Guiding with Love',
    longBio: `Hi, I'm Jackson. Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.`,
    origin: 'Kupang, NTT',
    phone: '628111111111',
    email: 'js.blabla@mail.com',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    certificate: [
      {
        certTitle: 'Lisensi Pramuwisata BSNP',
        certNo: '173-498/1377/ABB',
        certVerified: true,
        certExpire: '2024-10-10'
      },
      {
        certTitle: 'IELTS',
        certNo: '173-498/pp/ABB',
        certVerified: true,
        certExpire: '2024-10-10'
      },
      {
        certTitle: 'Lisensi Pramuwisata',
        certNo: '173-498/1377/ABB',
        certVerified: false,
        certExpire: '2022-10-10'
      }
    ]
  }
  return data;
}
const people = [
  {
    name: 'Михаил Сальников',
    role: 'Управляющий',
    imageUrl:
      'https://s3.eu-central-1.amazonaws.com/uploads.mangoweb.org/shared-prod/visegradfund.org/uploads/2021/08/placeholder-male.jpg',
  },
  {
    name: 'Ксения Сальникова',
    role: 'Менеджер',
    imageUrl:
      'https://i0.wp.com/fotilitystudios.com/wp-content/uploads/2021/09/generic_female.png?fit=888%2C888&ssl=1',
  },
  // More people...
];

const Team = () => {
  return (
    <div className="pb-2 md:pb-4">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 lg:grid-cols-2 items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Наша команда
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Мы — небольшая, но страстная команда, специализирующаяся на текстиле уже более 10 лет.  Мы всегда готовы помочь воплотить ваши идеи в реальность, помогая Вам создавать уникальные текстильные изделия. Приглашаем вас присоединиться к нам и ощутить магию текстиля в каждой детали!
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex flex-col items-center gap-y-5">
                <img
                  className="h-[150px] w-[150px] rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;

import Button from "./button";
import TextInput from "./textInput";

export const LoginForm = ({ handleSubmit }) => {
  return (
    <div class='container border rounded shadow-md grid grid-cols-6 gap-4'>
      <div class='col-start-2 col-span-4'>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='username'
            >
              Usuario
            </label>
            <TextInput
              clas=''
              id='username'
              type='text'
              placeholder='Usuario'
            />
          </div>
          <div className='flex flex-col'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='password'
            >
              Contraseña
            </label>
            <TextInput
              clas=''
              id='password'
              type='password'
              placeholder='Contraseña'
            />
          </div>
          <div className='flex justify-end'>
            <Button type='submit' text='Login' />
          </div>
        </form>
      </div>
    </div>
  );
};

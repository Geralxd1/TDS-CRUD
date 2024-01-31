import { Link } from '@inertiajs/react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head } from '@inertiajs/react';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
}

export default function Welcome({
  canLogin,
  canRegister,
  laravelVersion,
  phpVersion,
}: Props) {
  const route = useRoute();
  const page = useTypedPage();

  return (
    <>
      <Head title="Bienvenido" />

      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        {canLogin ? (
          <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
            {page.props.auth.user ? (
              <Link
                href={route('dashboard')}
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href={route('login')}
                  className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                  Iniciar sesión
                </Link>

                {canRegister ? (
                  <Link
                    href={route('register')}
                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >
                    Registrarse
                  </Link>
                ) : null}
              </>
            )}
          </div>
        ) : null}

        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          <div className="flex justify-center ">
            <h1 className='text-4xl font-bold text-gray-600 hover:text-gray-900 dark:text-gray-400'>
              Sistema Academia Preuniversitaria
            </h1>
          </div>
          <img className='w-full max-w-full'
          src='https://assets-global.website-files.com/60d611a58c56e653397acdad/617323bc4c4501356d0d7141_na_academias_pre_web_130619-681x413.jpg'/>
          <div className="flex flex-col ">
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
              Bienvenido al Sistema de Academia Preuniversitaria.
            </p>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
              Desarrollado como parte del Taller de Desarrollo de Software - 2024.
            </p>
          </div>
          <div className="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0">
            ALL RESERVED - 2024
          </div>
        </div>
      </div>
    </>
  );
}

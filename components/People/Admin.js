const Admin = () => {

    let content = ''
    content = (
        <div class="p-5 flex flex-col justify-center items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/img/image/Chair.png" alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Professor Dr. Kazi Abu Taher</h5>
                <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chairman</h4>
                <h4 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">Department : Information and Communication Technology </h4>
                <a class="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white" href="mailto:kataher@bup.edu.bd">Email : kataher@bup.edu.bd </a>
                <a class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white" href="tel:+8801711306453">phone Number : +8801711306453</a>

            </div>
        </div>
    )
    return (
        <div class="container my-24 px-6 mx-auto">
            <section class="mb-32 text-gray-800 text-center">
                <h2 class="text-3xl font-bold mb-12">Admin Members</h2>
                <div class="flex flex-col items-center gap-y-6">
                    {content}
                    {content}
                </div>
            </section>

        </div>
    )
}

export default Admin
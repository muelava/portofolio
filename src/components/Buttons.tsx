import { Link } from 'react-router-dom'

const Primary = (props: any) => {
    return (
        <Link to={props.link} className='bg-teal-600 hover:bg-teal-500 transition-colors px-5 text-sm md:text-base font-semibold py-2 text-nowrap rounded-full flex gap-2 items-center'> {props.children}</Link>
    )
}

const Tertiary = (props: any) => {
    return (
        <Link to={props.link} target={props?.target} className='border border-teal-600 text-teal-600 hover:text-teal-500 hover:border-teal-500 transition-colors px-5 text-sm md:text-base font-semibold py-2 text-nowrap rounded-full flex gap-2 items-center'> {props.children}</Link>
    )
}

export { Primary, Tertiary }
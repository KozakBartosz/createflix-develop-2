type TitleProps = {
    children: React.ReactNode
}

export const Title = ({ children }: TitleProps) => (
    <h1 className="font my-4 text-3xl">{children}</h1>
)

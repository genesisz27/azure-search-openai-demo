import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "O que está incluso no meu Plano de Saúde Northwind que não está no Standard?",
        value: "O que está incluso no meu Plano de Saúde Northwind que não está no Standard?"
    },
    { text: "O que acontece em uma revisão de desemepenho?", value: "O que acontece em uma revisão de desemepenho?" },
    { text: "O que um Gerente de Produto faz?", value: "O que um Gerente de Produto faz?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

import {
  Control,
  Controller,
  FieldErrors,
  useFieldArray
} from 'react-hook-form';

import { Button } from 'components/Button';
import { Radio } from 'components/Radio';
import { TextArea } from 'components/TextArea';
import { TextField } from 'components/TextField';

import { initialValuesPeople } from './controler';
import * as S from './styles';

import { EventType } from 'pages/Agenda/types';

type FormEventProps = {
  control: Control<EventType>;
  errors?: FieldErrors<EventType>;
};

export const FormEvent = ({ control, errors }: FormEventProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'peoples'
  });

  return (
    <S.Wrapper>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div>
            <TextField label="Nome do envento" {...field} />
            {errors?.name && <S.Error>Nome do evento é obrigatório</S.Error>}
          </div>
        )}
      />

      <S.Grid>
        <Controller
          name="date"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div>
              <TextField type="date" label="Data do evento" {...field} />
              {errors?.date && <S.Error>Data do evento é obrigatório</S.Error>}
            </div>
          )}
        />
        {}
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <TextField type="number" label="Valor sugerido" {...field} />
          )}
        />
      </S.Grid>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <S.RadioGroup>
            <Radio
              label="Com bebida"
              labelColor="black"
              {...field}
              onChange={() => field.onChange('COMBEBIDAS')}
              checked={field.value === 'COMBEBIDAS'}
            />
            <Radio
              label="Sem bebida"
              labelColor="black"
              {...field}
              onChange={() => field.onChange('SEMBEBIDAS')}
              checked={field.value === 'SEMBEBIDAS'}
            />
          </S.RadioGroup>
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => <TextArea label="Observação" {...field} />}
      />
      {fields.map((field, index) => (
        <>
          <S.ContentPeople key={field.name}>
            <Controller
              name={`peoples.${index}.name`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextField label="Nome" {...field} />}
            />
            <Controller
              name={`peoples.${index}.amount`}
              control={control}
              render={({ field }) => (
                <TextField type="number" label="Valor pago" {...field} />
              )}
            />
            <Button
              size="small"
              type="button"
              color="danger"
              // icon={<img src="/img/close.svg" alt="Fechar Modal" />}
              onClick={() => remove(index)}
            >
              X
            </Button>
          </S.ContentPeople>
          {errors?.peoples?.[index]?.name && (
            <S.Error>Nome da pessoa é obrigatória</S.Error>
          )}
        </>
      ))}
      <Button
        type="button"
        size="small"
        color="tertiary"
        onClick={() => append(initialValuesPeople)}
      >
        Adicionar pessoa
      </Button>
    </S.Wrapper>
  );
};

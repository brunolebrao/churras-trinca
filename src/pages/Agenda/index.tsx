import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Modal } from 'components/Modal';
import { FormEvent } from 'components/templates/Form';
import { initialValues } from 'components/templates/Form/controler';

import * as S from './styles';
import { EventType } from './types';

import { useEvents } from 'context/events/useEvents';
import { removeLocalStorage } from 'functions/local-storage';

const AgendaTemplate = () => {
  // const [event, setEvent] = useState<EventType>();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<number>();
  const { push } = useRouter();
  const {
    events,
    getEventPerId,
    event,
    setEvent,
    postEvent,
    putEvent,
    deleteEvent
  } = useEvents();

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    reset
  } = useForm<EventType>({
    defaultValues: initialValues,
    values: event || initialValues
  });

  const handleChangeEvents = useCallback(
    (event: EventType) => {
      getEventPerId(event.id);
      setIsOpen(true);
    },
    [getEventPerId]
  );
  const handleDelete = useCallback(
    (eventId: number) => {
      if (eventId) {
        deleteEvent(eventId);
        setIsOpenDelete(false);
      }
    },
    [deleteEvent]
  );

  const handleCreateEvent = () => {
    setIsOpen(true);
    setEvent(undefined);
    reset(initialValues);
  };

  const onSubmit: SubmitHandler<EventType> = async (data) => {
    if (event) {
      await putEvent(data);
      setEvent(undefined);
      setIsOpen(false);
    } else {
      await postEvent(data);
      setEvent(undefined);
      setIsOpen(false);
    }
  };

  return (
    <>
      <S.HeaderEvent>
        <Button onClick={() => handleCreateEvent()}>Cadastrar evento</Button>
        <Button
          onClick={() => {
            removeLocalStorage('userToken');
            push('/');
          }}
        >
          Logout
        </Button>
      </S.HeaderEvent>
      <S.Wrapper>
        {events.map((event) => (
          <Card
            key={event.id}
            event={event}
            onClick={() => handleChangeEvents(event)}
            handleDelete={() => {
              setDeleteId(event.id);
              setIsOpenDelete(true);
            }}
          />
        ))}
        <Modal
          title="Cadastrar evento"
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <FormEvent control={control} errors={errors} />
            <Button color="primary" type="submit" disabled={!isDirty}>
              {event ? 'Salvar' : 'Cadastrar'}
            </Button>
          </S.Form>
        </Modal>
        <Modal
          title="Deseja excluir um churras?"
          isOpen={isOpenDelete}
          onRequestClose={() => setIsOpenDelete(false)}
        >
          <S.FooterDelete>
            <Button onClick={() => handleDelete(deleteId!)} color="danger">
              Excluir
            </Button>
            <Button onClick={() => setIsOpenDelete(false)} color="primary">
              Cancelar
            </Button>
          </S.FooterDelete>
        </Modal>
      </S.Wrapper>
    </>
  );
};
export default AgendaTemplate;

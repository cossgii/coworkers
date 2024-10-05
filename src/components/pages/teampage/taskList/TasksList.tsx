import Task from './Task';
import { IGroup, TaskList } from '@/types/Group';
import AddTaskListModal from '@/components/modal/AddTaskListModal';
import { useAddTaskListModalStore } from '@/store/useAddTaskListModalStore';
import EmptyTaskList from './EmptyTaskList';

interface TaskListProps {
  taskLists: TaskList[];
  groupId: number;
}

export default function TasksList({ taskLists, groupId }: TaskListProps) {
  const { isModalOpen, openModal, closeModal } = useAddTaskListModalStore();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-lg-medium">할 일 목록</span>
        <span className="mr-auto text-lg text-text-default">
          {' '}
          ({taskLists.length}개)
        </span>
        <button
          onClick={() => openModal()}
          className="text-md-regular text-brand-primary"
        >
          + 새로운 목록 추가하기
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {taskLists && taskLists.length > 0 ? (
          taskLists.map((tasklist: TaskList) => (
            <Task key={tasklist.id} tasklist={tasklist} />
          ))
        ) : (
          <EmptyTaskList />
        )}
      </div>
      {isModalOpen && (
        <AddTaskListModal groupId={groupId} onClose={closeModal} />
      )}
    </div>
  );
}

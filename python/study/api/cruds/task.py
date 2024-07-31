import api.models.task as task_model
import api.schemas.task as task_schema
from sqlalchemy.orm import Session


def create_task(db: Session, task_create: task_schema.TaskCreate) -> task_model.Task:
    task = task_model.Task(**task_create.dict())
    db.add(task)
    db.commit()
    db.refresh(task)

    return task
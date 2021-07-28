import { CSSTransition, TransitionGroup } from "react-transition-group"

export const List = ({items, onRemove}) => (
  <TransitionGroup component={'ul'}>
    {items.map(item =>
      <CSSTransition
        classNames='os'
        key={item.id}
        timeout={500}
      >
        <li 
          onClick={() => onRemove(item.id)}
        >
          {item.title}
        </li>        
      </CSSTransition>

    )}
  </TransitionGroup>
)
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {return { 
        open() {
            dialog.current.showModal();
        }
    }});
    return createPortal(
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds </strong></p>
            <p>You stopped the timer with <strong>X seconds left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
})

export default ResultModal;
import React from 'react';

const Result = ({ showResult, quizs, marks, startOver }) => {
    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{marks > (quizs.length / 2) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold'>Your score is {marks} out of {quizs.length}</h3>
                            <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>Start Over</button>
                            <p className="mt-4 fs-6 fst-italic font-monospace text-danger">Nếu các cậu rảnh thì có thể vô follow Facebook tớ nha.</p>
                            <a className="font-monospace" href='https://www.facebook.com/hoanggioi.2803' title='Facebook'>Link Facebook tại đây!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;
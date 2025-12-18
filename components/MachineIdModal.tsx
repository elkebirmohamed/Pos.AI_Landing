import React, { useState } from 'react';
import { X, Fingerprint, ArrowRight, HelpCircle } from 'lucide-react';
import Button from './Button';

interface MachineIdModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: any;
}

const MachineIdModal: React.FC<MachineIdModalProps> = ({ isOpen, onClose, t }) => {
  const [machineId, setMachineId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (machineId.trim().length < 5) {
      alert("Veuillez entrer un Machine ID valide.");
      return;
    }
    
    // Redirection vers la nouvelle URL d'activation
    const baseUrl = "https://activation-cl-pos.vercel.app";
    const targetUrl = `${baseUrl}?machine_id=${encodeURIComponent(machineId)}`;
    
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const scrollToDownload = () => {
    onClose();
    const element = document.getElementById('download');
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity" 
          aria-hidden="true" 
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className="relative inline-block align-bottom bg-white dark:bg-slate-900 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full border border-slate-200 dark:border-slate-800">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white dark:bg-slate-900 rounded-md text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-brand-100 dark:bg-brand-900/30 sm:mx-0 sm:h-10 sm:w-10">
                <Fingerprint className="h-6 w-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-xl leading-6 font-bold text-slate-900 dark:text-white" id="modal-title">
                  {t.title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.desc}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="mb-4">
                    <label htmlFor="machine-id" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {t.label}
                    </label>
                    <input
                      type="text"
                      name="machine-id"
                      id="machine-id"
                      className="shadow-sm focus:ring-brand-500 focus:border-brand-500 block w-full sm:text-sm border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg p-3 border"
                      placeholder="Ex: XXXX-XXXX-XXXX-XXXX"
                      value={machineId}
                      onChange={(e) => setMachineId(e.target.value)}
                      required
                    />
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3 mb-6 flex items-start border border-amber-100 dark:border-amber-900/50">
                    <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800 dark:text-amber-300">
                      {t.help}
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <Button type="submit" fullWidth className="sm:ml-3">
                      {t.btn}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3 sm:px-6 sm:flex sm:flex-row justify-center border-t border-slate-100 dark:border-slate-800">
             <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
               {t.notInstalled} 
               <button onClick={scrollToDownload} className="text-brand-600 dark:text-brand-400 font-semibold ml-1 hover:underline">
                 {t.downloadLink}
               </button>
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineIdModal;
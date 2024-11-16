import React from 'react';
import { GameState } from '../types/game';
import { ModernGameBoard } from './ModernGameBoard';
import { ModernGameStats } from './ModernGameStats';
import { ModernControls } from './ModernControls';
import { ModernHeader } from './ModernHeader';
import { ModernNavigation } from './ModernNavigation';
import { useGameState } from '../hooks/useGameState';
import { useScaling } from '../hooks/useScaling';

interface ModernGameLayoutProps {
  gameState: GameState;
}

export function ModernGameLayout({ gameState }: ModernGameLayoutProps) {
  const { 
    hireWorker, 
    handleWorkerClick,
    removeWorker,
    unlockSlot,
    canHireWorker,
    selectedWorkerId,
    canMergeWorkers,
  } = useGameState();
  
  const scale = useScaling();

  return (
    <div className="h-full flex flex-col">
      <ModernHeader />
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="min-h-full w-full max-w-6xl mx-auto p-4 space-y-4">
          <div 
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
              minHeight: `${100 / scale}%`
            }}
          >
            <ModernGameStats gameState={gameState} />
            <div className="grid grid-cols-1 gap-4 mt-4">
              <ModernGameBoard
                gridState={gameState.gridState}
                workers={gameState.workers}
                onCellClick={(pos) => {
                  const worker = gameState.workers.find(w => w.position === pos);
                  handleWorkerClick(worker?.id || '', pos);
                }}
                onRemoveWorker={removeWorker}
                onUnlockSlot={unlockSlot}
                balance={gameState.balances.emsx}
                selectedWorkerId={selectedWorkerId}
                canMergeWorkers={canMergeWorkers}
                unlockedSlots={gameState.unlockedSlots}
              />
              <ModernControls
                gameState={gameState}
                onHire={hireWorker}
                canHireWorker={canHireWorker}
              />
            </div>
          </div>
        </div>
      </div>
      <ModernNavigation />
    </div>
  );
}